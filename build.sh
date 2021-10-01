if [ ! -z $1 ]; then
    git pull
    docker build . -t mcmull27/blinky
    docker tag mcmull27/blinky mcmull27/blinky:$1
    docker push mcmull27/blinky:$1
fi