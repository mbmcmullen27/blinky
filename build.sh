git pull
docker build . -t mcmull27/blinky
docker tag mcmull27/blinky mcmull27/blinky:arm
docker push mcmull27/blinky:arm
