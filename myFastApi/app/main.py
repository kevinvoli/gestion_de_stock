import asyncio
import json
import uuid
from fastapi import FastAPI, HTTPException 

app = FastAPI()

async def test_connection():
    try:
        reader, writer = await asyncio.open_connection('127.0.0.1', 3004)
        print("Connection to NestJS established successfully.")
        writer.close()
        await writer.wait_closed()
    except Exception as e:
        print(f"Error connecting to NestJS: {e}")

# Tester la connexion


def handle_message(message):
    try:
        # Séparer la longueur et le JSON
        length_str, json_part = message.split("#", 1)
        expected_length = int(length_str)

        # Vérifier si la longueur correspond au contenu
        if len(json_part) == expected_length:
            # Convertir en dictionnaire Python
            data = json.loads(json_part)
            print("Message reçu et parsé :", data)
            return data
        else:
            print(f"Erreur : la longueur attendue ({expected_length}) ne correspond pas à la longueur reçue ({len(json_part)})")
    except Exception as e:
        print("Erreur lors du traitement du message :", e)

# Fonction pour envoyer un message à NestJS
async def send_message_to_nestjs(data):
    try:
        reader, writer = await asyncio.open_connection('192.168.183.153', 3000)
        
        message = {
            "pattern": {
                "cmd": "process_data"  # Commande spécifique à traiter
            },
            "data": data,  # Données envoyées
            "id": str(uuid.uuid4()) # Identifiant unique pour la requête
        }

        # Convertir le message en JSON
        json_message = json.dumps(message, ensure_ascii=False)
        
        # Calculer la longueur du message en bytes
        message_length = len(json_message)
        
        # Construire le message avec la longueur + JSON
        full_message = f"{message_length}#{json_message}"

        # Convertir en bytes
        full_message_bytes = full_message.encode('utf-8') + b'\n'
        print(f"Sending message: {full_message_bytes}")
        
        # Envoyer le message au service NestJS
        writer.write(full_message_bytes)
        await writer.drain()

        response = await reader.read(1024)
        print(f"Response received: {response.decode()}")
        writer.close()
        await writer.wait_closed()
        return handle_message(response.decode())
    except Exception as e:
        print(f"Error: {e}")
        return e
        # nt FastAPI pour tester la communication avec NestJS
@app.get("/")
async def root():
    response = await send_message_to_nestjs({
        "serviceName":"logService",
        "moduleName":"log",
        # "serviceSource": '3',
        "method": "POST"
        })
    return response


@app.post("/send-data")
async def send_data_to_nestjs(data: dict):
    response = await send_message_to_nestjs(data)
    return {"response_from_nestjs": response}
