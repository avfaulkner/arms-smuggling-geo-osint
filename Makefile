# Makefile for arms-smuggling-geo-osint

.PHONY: setup jupyter clean

# Setup Python virtual environment and install requirements
setup:
	python3 -m venv venv
	. venv/bin/activate && pip install --upgrade pip
	. venv/bin/activate && pip install -r requirements.txt

# Launch Jupyter Lab
jupyter:
	. venv/bin/activate && jupyter lab

# Clean all generated files
clean:
	find . -type f -name '*.pyc' -delete
	find . -type d -name '__pycache__' -exec rm -r {} +
	rm -rf venv

# Usage:
# make setup     - Sets up your Python env and installs packages
# make jupyter   - Launches Jupyter Lab
# make clean     - Cleans compiled files and venv
