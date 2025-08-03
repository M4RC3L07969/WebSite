# WebSite

Se for a primeira vez:

python -m venv env

Rodar o Backend:

pip install fastapi
pip install uvicorn
pip install sqlalchemy
.\env\Scripts\Activate.ps1
cd FastAPI
uvicorn main:app --reload

Rodar o Frontend:

.\env\Scripts\Activate.ps1
cd game_store-app
npm start
