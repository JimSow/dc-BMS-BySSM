@echo off
echo "正在生成BMS的dao,mapping,service文件"

java -jar dcTool-MCG.jar -configfile makeBMS.xml -overwrite
@pause