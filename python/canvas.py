import requests, json
from collections import defaultdict
from datetime import datetime, timezone, timedelta
from zoneinfo import ZoneInfo


def getAssignment():
    with open('python/canvastoken.json') as json_data:
        d = json.load(json_data)

    token = d["token"]
    # userId = d["userId"]

    canvasUrl = "https://njit.instructure.com/api/v1/"

    canvasCourseCodes = {
        "CS 435": 62839,
        "YWCC 307": 64104,
        "CS 490": 63237, 
        "DS 450": 60028,
        "MATH 461": 60484  
    }

    assignmentsDue = defaultdict(list)

    for key, value in canvasCourseCodes.items():
        requestUrl = f"{canvasUrl}courses/{value}/assignments?access_token={token}"
        r = requests.get(requestUrl).json()
        for i in r:
            ts = i["due_at"] if i["due_at"] != None else datetime.fromtimestamp(0, tz=timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
            dt = datetime.fromisoformat(ts.replace("Z", "+00:00")).astimezone(ZoneInfo("America/New_York"))
            if dt > datetime.now(ZoneInfo("America/New_York")):
                assignmentsDue[key] = [i["name"], dt.strftime("%b %d, %Y %I:%M %p %Z")]

    return assignmentsDue

print(getAssignment())