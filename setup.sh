#!/bin/bash

echo "[+] Creating virtual environment..."
python3 -m venv venv

echo "[+] Activating environment..."
source venv/bin/activate

echo "[+] Installing requirements..."
pip install --upgrade pip
pip install -r requirements.txt

echo "[+] Launching Jupyter Lab..."
jupyter lab

# Fallback to Makefile
