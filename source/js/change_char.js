//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
    "url(/image/1.png)",
    "url(/image/2.png)",
    "url(/image/3.png)",
    "url(/image/4.png)",
    "url(/image/5.png)",
    "url(/image/6.png)",
    "url(/image/7.png)",
    "url(/image/8.png)",
    "url(/image/9.png)",
    "url(/image/10.png)",
    "url(/image/11.png)"
  ];
  //获取背景图片总数，生成随机数
  var bgindex =Math.floor(Math.random() * backimg.length);
  //重设背景图片
  document.getElementsByClassName("avatar").style.AvatarImage = backimg[bgindex];
  //随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
/*
  var bannerimg =[
    "url(/image/1.png)",
    "url(/image/2.png)",
    "url(/image/3.png)",
    "url(/image/4.png)"
  ];
  //获取banner图片总数，生成随机数
  var bannerindex =Math.floor(Math.random() * bannerimg.length);
  //重设banner图片
  document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];
*/