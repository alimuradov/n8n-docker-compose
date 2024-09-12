#!/bin/bash

# Создаем каталоги, если их не существует
mkdir -p redis_storage
mkdir -p n8n_storage
mkdir -p local_files
mkdir -p caddy_config
mkdir -p caddy_data
mkdir -p db_storage

echo "Каталоги созданы успешно."
