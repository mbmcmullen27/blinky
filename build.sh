tag=$1
if [ ! -z $tag ]; then
    git pull
    docker build . -t mcmull27/blinky
    docker tag mcmull27/blinky mcmull27/blinky:$tag
    docker push mcmull27/blinky:$tag
else
    echo -e "->> Missing image tag for docker push \nusage: \n  ./build.sh [image tag]"
fi