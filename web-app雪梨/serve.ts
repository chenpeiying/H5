import express from 'express';
import bodyParser from 'body-parser'
const app = express();
app.use(bodyParser.json());

//同步课
class Course{
    constructor(
        public id:number,
        public courseName:string,
        public images:string,
        public task:number,
        public person:number
    ){}
}
const courses = [
    new Course(1,'混合应用开发','http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130',10,90),
    new Course(2,'javascript',"http://usercontent.edu2act.cn/media/team/18-03-05/6niXYjHC5hvoAbWKUQCdPa.jpg?imageView2/1/w/230/h/130",15,80),
    new Course(3,'c++',"http://usercontent.edu2act.cn/media/team/17-09-14/wFmfsk8VswjGQtzimbK2EE.png?imageView2/1/w/230/h/130",12,60),
    new Course(4,'2017级web开发二',"http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130",15,100),
    new Course(5,'HTML与css',"http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130",10,100),
    new Course(6,'2016级软件测试基础',"http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130",4,110),
    new Course(7,'软件测试',"http://usercontent.edu2act.cn/media/team/18-09-09/jHw7UZ9hmNxJtTgCDuf9c3.jpg?imageView2/1/w/230/h/130",4,110),
    new Course(8,"计算机导论","http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130",6,130),
    new Course(9,'HTML与css',"http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130",10,100),
    new Course(10,'2016级软件测试基础',"http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130",4,110),
    new Course(11,'软件测试',"http://usercontent.edu2act.cn/media/team/18-09-09/jHw7UZ9hmNxJtTgCDuf9c3.jpg?imageView2/1/w/230/h/130",4,110),
    new Course(12,"计算机导论","http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130",6,130),  
]

//课程
class Lesson{
    constructor(
        public id:number,
        public lessonName:string,
        public images:string,
        public introduction : string,
        public task:number,
        public person:number
    ){}
}
const lessons = [
    new Lesson(1,'css基础','http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190','CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性。 ',12,2317),
    new Lesson(2,'HTML5基础','http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190','    HTML5是最新的一项Web标准，在原有HTML4的基础上定义了一些新的标签和新的JavaScript API。是原有HTML4标准的一个超集。本课程主要介绍HTML5的新特性以及相应API。',12,1314),
    new Lesson(3,'扩展的ICONIX软件过程实践','http://usercontent.edu2act.cn/media/cs/16-11-03/TeZqcmxukYntmh8UigEeqU.png?imageView2/1/w/320/h/190','    ICONIX软件过程的主体设计思想是尽早进入编码阶段，缩短分析设计周期的软件开发方法合理的简化统一过程(RUP)， 基于极限编程(XP)和敏捷软件开发的思想。 ICONIX过程与 UML和RUP相比，是轻量级的过程。本实践课程是基于12306火车票购票系统的例子全面讲解ICONIX各阶段生成的UML模型以及EA工具的使用。',12,2269),
    new Lesson(4,'Github 开源之旅视频课程第一季：启程','http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190','      完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ',13,456),
    new Lesson(5,'Selenium IDE WEB自动化测试入门视频课程（中）','http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190','上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的基本用法，学完了可以录制简单的自动化测试脚本。中篇和下篇会介绍很多技术细节。基本上中篇会把最常用到的技术细节都讲到。这样上篇和中篇的内容可以应付80%网站的自动化测试任务了。下篇有些高级话题，不是每个人都会用到的，适合骨灰级玩家。',12,2345),
    new Lesson(6,'网页制作与开发','http://usercontent.edu2act.cn/media/cs/16-09-22/Qrnx7yH2tp7mGGLSdbhWHc.png?imageView2/1/w/320/h/190','     本课程利用线上与线下相结合的授课方式，以网页开发主流软件Dreamweaver为工具，教给学生快速搭建网站的方法。培养学生具备能够利用有限的代码快速搭建出网站页面的能力。',123,234),
    new Lesson(7,'产品&交互设计那些事儿','http://usercontent.edu2act.cn/media/cs/16-09-08/DTAweqRQeVWst8N8RmH3pe.png?imageView2/1/w/320/h/190','      本课程是和学员一起探讨交流关于产品设计和交互设计的一些经验教训，结合具体案例讲解了一些在具体设计某些功能点时需要注意的问题。',10,1890),
    new Lesson(8,'VR AR产品设计的思考视频课程','http://usercontent.edu2act.cn/media/cs/16-09-08/2sLJNqumrjAEQjwGMCGRN5.png?imageView2/1/w/320/h/190','      “2016是VR元年”，这一观点早已在计算机互联网行业中流行开来，与VR相关的各种分析研究也是层出不穷。而随着Google Cardboard等技术逐渐普及，VR使用成本也在不断降低。VR技术不仅涉及到游戏领域，在训练、教育以及最新提出的全景直播等应用也开始被人不断提出，VR应用必将很快走出传统人们观念中游戏、三维模拟等应用范围，变成像微信、淘宝等常用手机应用一样融入日常生活中，而广大产品经理也需要充分了解VR技术背景，以全新角度规划用户需求发掘、产品功能设计等工作，以求为自身和企业牟取更多发展机遇。',19,1390),
    new Lesson(9,'ProcessOn界面原型绘制','http://usercontent.edu2act.cn/media/cs/16-09-02/QV7FBJ72fUkL3sv6Te2FEP.png?imageView2/1/w/320/h/190','ProcessOn是国内比较有名的图形设计分享社区，有着强大的在线制图功能。本次课程主要介绍其界面原型图的绘制功能。课程主要包括以下几项：ProcessOn界面原型绘制功能的主要操作。ProcessOn界面原型绘制功能的使用技巧。以微信为主要参考，完成微信App的高保真界面原型设计。ProcessOn仅仅是界面原型绘制工具中较为简单的一种，想要完成高质量的原型软件还是使用Axure比较好，',17,1234),
    new Lesson(10,'项目管理平台Redmine','http://usercontent.edu2act.cn/media/cs/16-09-02/zv88bojNGWP9zZcThYAhS.png?imageView2/1/w/320/h/190','      本课程讲解了项目管理平台redmine的安装部署、管理员维护、普通用户使用，和其他同类型平台进行了简单的对比。让学员能够熟练的使用redmine进行项目进度的把握。 ',145,7890),
    new Lesson(11,'墨刀入门','http://usercontent.edu2act.cn/media/cs/16-07-14/zuW3YV2EzoSoEbxVmDyrK9.png?imageView2/1/w/320/h/190','      本课程重点讲解一款在线快速原型设计工具——墨刀的使用方法和操作技巧。结合具体案例，告诉学员在什么情况下使用在线设计工具，在制作原型的时候哪些需要做，做到什么程度。',123,4567),
    new Lesson(12,'用户画像','http://usercontent.edu2act.cn/media/cs/16-07-14/ckCb5QBjSVAYLxWDQRkAwc.png?imageView2/1/w/320/h/190','     本课程用户画像是需求捕获的相关内容。通过给用户建模，帮助产品设计人员了解用户真正的需求是什么，用户潜在的希望是什么，准确的把握住用户的痛点，为后面产品设计的具体内容做好铺垫。',132,2346),
]

//社区
class Community{
    constructor(
        public id:number,
        public communityName:string,
        public images:string,
        public introduction : string,
        public time:string,
        public read:number,
        public write:number,
    ){}
}
const communitys = [
    new Community(1,' WEB开发（二）—— 函数','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg','（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。1．函数声明形式 注： 不需要在函数声明的后面添加一','2018-10-11 15:10',123,9),
    new Community(2,'js数组','http://usercontent.edu2act.cn/media/ckeditor/upload2018/1020/vsBhNsaAn8Zqd5RSPEVmVM.jpg','声明：数组声明的三种方式：1. var arr = new Array（）；(声明一个空数组对象)    arr[0]="abc";2. var arr = new Array（5）；（声明数组并初始化长度，注意数组的长','2018-10-21 11:27',122,0),
    new Community(3,' 类定义关键字详解','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg','JAVA类与对象（三）----类定义关键字详解 static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来访问，也就是使这个属性成为本类的类变量，为本类对象所共有。这个属性就','2018-10-09 19:21',12,2),
    new Community(4,' 一个java文件中可包含多个main方法','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/edrLxidT6BMiGxXjRq39iJ.jpg','一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。但是当JVM进行编译时只','2018-10-09 19:17',20,4),
    new Community(5,' 数据结构——线性表的经典应用','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg','1. 一元多项式的表示和相加        在数学上，一个一元多项式\(P_{n}(x)\)可升序写成：\(P_{n}(x) = p_{0}+p_{1}x^1+p_{2}x^2+...++p_{n}x^n\)它由n+1个系数唯一确定。因此，','2018-10-08 14:28',45,0),
    new Community(6,' 栈和队列之间的相互转化','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/ZVukV3kKu2r8b9ezbbc5VA.jpg','队列实现栈需要两个队列data，help，因为队列是先进先出，想要模拟栈的结构，每次取栈顶的元素也就相当于取队列中队尾的元素，要取data队列的队尾元素，需将最后一个元素前面的先取走，才能取到最后一个元素，所以，将前面的元素逐个弹出到hel','2018-10-01 12:51',34,0),
    new Community(7,' JavaScript中事件的绑定','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0921/4cQyhZvxEuX2RFjQUx3waR.jpg','一、  事件      事件是您在编程时系统内的发生的动作或者发生的事情，系统通过它来告诉您在您愿意的情况下您可以以某种方式对它做出回应。在Web中,事件在浏览器窗口中被触发并且通常被绑定到窗口内部的特定部分——可能','2018-09-26 15:59',56,8),
]
app.get('/api/communitys/:id',(req,res)=>{
    res.json(communitys.find((ele)=>ele.id == req.params.id));
 });
 app.get('/api/communitys/:id',(req,res)=>{
    res.json(communitys.find((ele)=>ele.id == req.params.id));
 });
//同步课
app.get('/api/courses',(req,res)=>{  
    res.json(courses);
});
app.get('/api/courses/:id',(req,res)=>{
   res.json(courses.find((ele)=>ele.id == req.params.id));
});
//课程
app.get('/api/lessons',(req,res)=>{
    res.json(lessons);
});
app.get('/api/lessons/:id',(req,res)=>{
    res.json(lessons.find((ele)=>ele.id == req.params.id));
 });
app.listen(8080);



// app.get('/api',(req,res)=>{

//     res.json(courses);
// });
// app.post('/api',(req,res)=>{
//     console.log(req.body);
//     res.json(courses);
// })