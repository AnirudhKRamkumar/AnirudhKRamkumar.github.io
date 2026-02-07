from flask import Flask, request, jsonify
from canvas import getAssignment

app = Flask(__name__)

@app.get("/api/health")
def health():
    return jsonify({"ok": True})

@app.get("/api/assignments")
def assignments():    
    output = getAssignment()
    print(output)
    return jsonify(output)


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
