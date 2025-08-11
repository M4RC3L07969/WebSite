# WebSite

Se for a primeira vez:

python -m venv env
pip install fastapi
pip install uvicorn
pip install sqlalchemy

Rodar o Backend:

.\env\Scripts\Activate.ps1
cd WebSite
cd FastAPI
uvicorn main:app --reload

Rodar o Frontend:

.\env\Scripts\Activate.ps1
cd WebSite
cd React
cd game_store-app
npm start
