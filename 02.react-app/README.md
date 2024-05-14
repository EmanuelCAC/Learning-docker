docker build -t react-image .
docker run --env-file ./.env -v ${pwd}\src:/app/src:ro -d -p 3000:3000 --name react-app react-image

#bash
docker exec -it react-app bash
