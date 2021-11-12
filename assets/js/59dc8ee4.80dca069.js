"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[3497],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),g=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=g(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=g(n),p=r,d=m["".concat(s,".").concat(p)]||m[p]||u[p]||a;return n?o.createElement(d,i(i({ref:t},c),{},{components:n})):o.createElement(d,i({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var g=2;g<a;g++)i[g]=n[g];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7661:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return g},toc:function(){return c},default:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"logstage",title:"LogStage"},s=void 0,g={unversionedId:"resources/ecosystem/community/logstage",id:"resources/ecosystem/community/logstage",isDocsHomePage:!1,title:"LogStage",description:"LogStage is a zero-cost structural logging framework for Scala & Scala.js.",source:"@site/docs/resources/ecosystem/community/logstage.md",sourceDirName:"resources/ecosystem/community",slug:"/resources/ecosystem/community/logstage",permalink:"/next/resources/ecosystem/community/logstage",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/resources/ecosystem/community/logstage.md",tags:[],version:"current",frontMatter:{id:"logstage",title:"LogStage"},sidebar:"resources-sidebar",previous:{title:"Distage",permalink:"/next/resources/ecosystem/community/distage"},next:{title:"MUnit ZIO",permalink:"/next/resources/ecosystem/community/munit-zio"}},c=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://izumi.7mind.io/logstage/"},"LogStage")," is a zero-cost structural logging framework for Scala & Scala.js."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Some key features of ",(0,a.kt)("em",{parentName:"p"},"LogStage"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"LogStage extracts structure from ordinary string interpolations in your log messages with zero changes to code."),(0,a.kt)("li",{parentName:"ol"},"LogStage uses macros to extract log structure, it is faster at runtime than a typical reflective structural logging frameworks"),(0,a.kt)("li",{parentName:"ol"},"Log contexts"),(0,a.kt)("li",{parentName:"ol"},"Console, File, and SLF4J sinks included, File sink supports log rotation,"),(0,a.kt)("li",{parentName:"ol"},"Human-readable output and JSON output included,"),(0,a.kt)("li",{parentName:"ol"},"Method-level logging granularity. Can configure methods com.example.Service.start and com.example.Service.doSomething independently,"),(0,a.kt)("li",{parentName:"ol"},"Slf4J adapters: route legacy Slf4J logs into LogStage router")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'// LogStage core library\nlibraryDependencies += "io.7mind.izumi" %% "logstage-core" % "1.0.8"\n')),(0,a.kt)("p",null,"There are also some optional modules:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies ++= Seq(\n  // Json output\n  "io.7mind.izumi" %% "logstage-rendering-circe" % "1.0.8",\n  // Router from Slf4j to LogStage\n  "io.7mind.izumi" %% "logstage-adapter-slf4j" % "1.0.8",\n  // LogStage integration with DIStage\n  "io.7mind.izumi" %% "distage-extension-logstage" % "1.0.8",\n  // Router from LogStage to Slf4J\n  "io.7mind.izumi" %% "logstage-sink-slf4j " % "1.0.8",\n)\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Let's try a simple example of using ",(0,a.kt)("em",{parentName:"p"},"LogStage"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import izumi.fundamentals.platform.uuid.UUIDGen\nimport logstage.LogZIO.log\nimport logstage.{IzLogger, LogIO2, LogZIO}\nimport zio.{Has, URIO, _}\n\nobject LogStageExample extends zio.App {\n  val myApp = for {\n    _ <- log.info("I\'m logging with logstage!")\n    userId = UUIDGen.getTimeUUID()\n    _ <- log.info(s"Current $userId")\n    _ <- log.info("I\'m logging within the same fiber!")\n    f <- log.info("I\'m logging within a new fiber!").fork\n    _ <- f.join\n  } yield ()\n\n  val loggerLayer: ULayer[Has[LogIO2[IO]]] =\n    ZLayer.succeed(LogZIO.withFiberId(IzLogger()))\n\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =\n    myApp.provideLayer(loggerLayer).exitCode\n}\n')),(0,a.kt)("p",null,"The output of this program would be something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"I 2021-07-26T21:27:35.164 (LogStageExample.scala:8)  \u2026mpty>.LogStageExample.myApp [14:zio-default-async-1] fiberId=Id(1627318654646,1) I'm logging with logstage!\nI 2021-07-26T21:27:35.252 (LogStageExample.scala:10)  <.LogStageExample.myApp.8 [14:zio-default-async-1] fiberId=Id(1627318654646,1) Current userId=93546810-ee32-11eb-a393-11bc5b145beb\nI 2021-07-26T21:27:35.266 (LogStageExample.scala:11)  <.L.myApp.8.10 [14:zio-default-async-1] fiberId=Id(1627318654646,1) I'm logging within the same fiber!\nI 2021-07-26T21:27:35.270 (LogStageExample.scala:12)  <.L.m.8.10.11 [16:zio-default-async-2] fiberId=Id(1627318655269,2) I'm logging within a new fiber!\n")))}m.isMDXComponent=!0}}]);