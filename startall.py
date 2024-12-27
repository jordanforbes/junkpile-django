import subprocess

def run():
  try:
    # start Django Server
    # django_server = subprocess.Popen(["python", "manage.py", "runserver"])

    # start react frontend
    react_frontend = subprocess.Popen(["npm", "start"], cwd ="./frontend")

    # compile sass

    # django_server.wait()
    react_frontend.wait()

  except KeyboardInterrupt:
    print("\nShutting down...")
    # django_server.terminate()
    react_frontend.terminate()

if __name__ == "__main__":
  run()
