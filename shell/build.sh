CurrentPath="`pwd`" #绝对路径

ENV=$1 #环境
Now=`date +%Y%m%d%H%M%S` #当前时间
Tag="$1$Now" #tag号

previewLog=`tail -n -1 ${CurrentPath}/shell/prod.log`

echo "$Tag" >> "${CurrentPath}/shell/prod.log"

echo $previewLog


docker build -t "47.101.32.46:5000/mall:$Tag" .

# docker tag "mall:${Tag}" "337502348/mall:${Tag}"

docker push "47.101.32.46:5000/mall:$Tag"

ssh root@47.101.32.46

docker pull "47.101.32.46:5000/mall:$Tag"

docker stop $previewLog

docker run --name=${Tag} -p 4300:4300 -d "337502348/mall:${Tag}"

