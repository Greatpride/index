// JavaScript Document
window.onload=function(){
    imgLocation("container","box");
    var imgData = {"data":[{"src":"../pic/img1.jpg"},{"src":"../pic/img2.jpg"},{"src":"../pic/img3.jpg"},{"src":"../pic/img4.jpg"},{"src":"../pic/img5.jpg"},{"src":"../pic/img6.jpg"}]};
}
/*图片按指定规则排列*/
function imgLocation(parent,content){
    /*将parent下的所有的content全部取出*/
    var cparent = document.getElementById(parent);
    var ccontent = getChildElement(cparent,content);
    var imgWidth = ccontent[0].offsetWidth;
    var num = Math.floor(document.documentElement.clientWidth/imgWidth);
    cparent.style.cssText = "Width:"+imgWidth*num+"px; margin:0px auto";

    var BoxHeightArr = [];
    for(var i=0;i<ccontent.length;i++){
        if(i<num) {
            //BoxHeightArr.push(ccontent[i].offsetHeight);
            BoxHeightArr[i] = ccontent[i].offsetHeight;
            console.log(BoxHeightArr[i]);
        }else{
            var minHeight = Math.min.apply(null,BoxHeightArr);
            //console.log(minHeight);
            var minIndex = getminheightLocation(BoxHeightArr,minHeight);
            ccontent[i].style.position = "absolute";
            ccontent[i].style.top = minHeight + "px";
            ccontent[i].style.left = ccontent[minIndex].offsetLeft + "px";
            BoxHeightArr[minIndex]+=ccontent[i].offsetHeight;
        }
    }
}


/*得到最小高度所在索引*/
function getminheightLocation(BoxHeightArr,minHeight){
    for(var i in BoxHeightArr) {
        if(BoxHeightArr[i] == minHeight) {
            return i;
        }
    }
}

/*得到parent中的所有content子对象*/
function getChildElement(parent,content){
    var contentArr = [];
    var allcontent = parent.getElementsByTagName("*");
    for(var i=0;i<allcontent.length;i++){
        if(allcontent[i].className==content){
            contentArr.push(allcontent[i]);
        }
    }
    return contentArr;
}
// JavaScript Document