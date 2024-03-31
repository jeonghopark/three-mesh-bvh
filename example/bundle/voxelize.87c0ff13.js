let e,t,r,n,o,i,a;function s(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var l=globalThis,d={},c={},u=l.parcelRequire4485;null==u&&((u=function(e){if(e in d)return d[e].exports;if(e in c){var t=c[e];delete c[e];var r={id:e,exports:{}};return d[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){c[e]=t},l.parcelRequire4485=u);var h=u.register;h("27Lyk",function(e,t){s(e.exports,"register",()=>r,e=>r=e);var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),h("c8CJQ",function(e,t){var r;e.exports,e.exports=((r=function(){function e(e){return o.appendChild(e.dom),e}function t(e){for(var t=0;t<o.children.length;t++)o.children[t].style.display=t===e?"block":"none";n=e}var n=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(e){e.preventDefault(),t(++n%o.children.length)},!1);var i=(performance||Date).now(),a=i,s=0,l=e(new r.Panel("FPS","#0ff","#002")),d=e(new r.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=e(new r.Panel("MB","#f08","#201"));return t(0),{REVISION:16,dom:o,addPanel:e,showPanel:t,begin:function(){i=(performance||Date).now()},end:function(){s++;var e=(performance||Date).now();if(d.update(e-i,200),e>a+1e3&&(l.update(1e3*s/(e-a),100),a=e,s=0,c)){var t=performance.memory;c.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){i=this.end()},domElement:o,setMode:t}}).Panel=function(e,t,r){var n=1/0,o=0,i=Math.round,a=i(window.devicePixelRatio||1),s=80*a,l=48*a,d=3*a,c=2*a,u=3*a,h=15*a,p=74*a,f=30*a,m=document.createElement("canvas");m.width=s,m.height=l,m.style.cssText="width:80px;height:48px";var w=m.getContext("2d");return w.font="bold "+9*a+"px Helvetica,Arial,sans-serif",w.textBaseline="top",w.fillStyle=r,w.fillRect(0,0,s,l),w.fillStyle=t,w.fillText(e,d,c),w.fillRect(u,h,p,f),w.fillStyle=r,w.globalAlpha=.9,w.fillRect(u,h,p,f),{dom:m,update:function(l,g){n=Math.min(n,l),o=Math.max(o,l),w.fillStyle=r,w.globalAlpha=1,w.fillRect(0,0,s,h),w.fillStyle=t,w.fillText(i(l)+" "+e+" ("+i(n)+"-"+i(o)+")",d,c),w.drawImage(m,u+a,h,p-a,f,u,h,p-a,f),w.fillRect(u+p-a,h,a,f),w.fillStyle=r,w.globalAlpha=.9,w.fillRect(u+p-a,h,a,i((1-l/g)*f))}}},r)}),h("apoN1",function(e,t){s(e.exports,"RoundedBoxGeometry",()=>i);var r=u("ilwiq");let n=new r.Vector3;function o(e,t,r,o,i,a){let s=2*Math.PI*i/4,l=Math.max(a-2*i,0);n.copy(t),n[o]=0,n.normalize();let d=.5*s/(s+l),c=1-n.angleTo(e)/(Math.PI/4);return 1===Math.sign(n[r])?c*d:l/(s+l)+d+d*(1-c)}class i extends r.BoxGeometry{constructor(e=1,t=1,n=1,i=2,a=.1){if(i=2*i+1,a=Math.min(e/2,t/2,n/2,a),super(1,1,1,i,i,i),1===i)return;let s=this.toNonIndexed();this.index=null,this.attributes.position=s.attributes.position,this.attributes.normal=s.attributes.normal,this.attributes.uv=s.attributes.uv;let l=new r.Vector3,d=new r.Vector3,c=new(0,r.Vector3)(e,t,n).divideScalar(2).subScalar(a),u=this.attributes.position.array,h=this.attributes.normal.array,p=this.attributes.uv.array,f=u.length/6,m=new r.Vector3,w=.5/i;for(let r=0,i=0;r<u.length;r+=3,i+=2)switch(l.fromArray(u,r),d.copy(l),d.x-=Math.sign(d.x)*w,d.y-=Math.sign(d.y)*w,d.z-=Math.sign(d.z)*w,d.normalize(),u[r+0]=c.x*Math.sign(l.x)+d.x*a,u[r+1]=c.y*Math.sign(l.y)+d.y*a,u[r+2]=c.z*Math.sign(l.z)+d.z*a,h[r+0]=d.x,h[r+1]=d.y,h[r+2]=d.z,Math.floor(r/f)){case 0:m.set(1,0,0),p[i+0]=o(m,d,"z","y",a,n),p[i+1]=1-o(m,d,"y","z",a,t);break;case 1:m.set(-1,0,0),p[i+0]=1-o(m,d,"z","y",a,n),p[i+1]=1-o(m,d,"y","z",a,t);break;case 2:m.set(0,1,0),p[i+0]=1-o(m,d,"x","z",a,e),p[i+1]=o(m,d,"z","x",a,n);break;case 3:m.set(0,-1,0),p[i+0]=1-o(m,d,"x","z",a,e),p[i+1]=1-o(m,d,"z","x",a,n);break;case 4:m.set(0,0,1),p[i+0]=1-o(m,d,"x","y",a,e),p[i+1]=1-o(m,d,"y","x",a,t);break;case 5:m.set(0,0,-1),p[i+0]=o(m,d,"x","y",a,e),p[i+1]=1-o(m,d,"y","x",a,t)}}}}),h("8todg",function(e,t){s(e.exports,"GenerateMeshBVHWorker",()=>i);var r=u("ilwiq"),n=u("ff8ed"),o=u("77YCt");class i extends o.WorkerBase{constructor(){super(new Worker(u("bSef7"))),this.name="GenerateMeshBVHWorker"}runTask(e,t,o={}){return new Promise((i,a)=>{if(t.getAttribute("position").isInterleavedBufferAttribute||t.index&&t.index.isInterleavedBufferAttribute)throw Error("GenerateMeshBVHWorker: InterleavedBufferAttribute are not supported for the geometry attributes.");e.onerror=e=>{a(Error(`GenerateMeshBVHWorker: ${e.message}`))},e.onmessage=s=>{let{data:l}=s;if(l.error)a(Error(l.error)),e.onmessage=null;else if(l.serialized){let{serialized:a,position:s}=l,d=(0,n.MeshBVH).deserialize(a,t,{setIndex:!1}),c=Object.assign({setBoundingBox:!0},o);if(t.attributes.position.array=s,t.index)t.index.array=a.index;else{let e=new r.BufferAttribute(a.index,1,!1);t.setIndex(e)}c.setBoundingBox&&(t.boundingBox=d.getBoundingBox(new r.Box3)),i(d),e.onmessage=null}else o.onProgress&&o.onProgress(l.progress)};let s=t.index?t.index.array:null,l=t.attributes.position.array,d=[l];s&&d.push(s),e.postMessage({index:s,position:l,options:{...o,onProgress:null,includedProgressCallback:!!o.onProgress,groups:[...t.groups]}},d.map(e=>e.buffer).filter(e=>"undefined"==typeof SharedArrayBuffer||!(e instanceof SharedArrayBuffer)))})}}}),h("77YCt",function(e,t){s(e.exports,"WorkerBase",()=>r);class r{constructor(e){this.name="WorkerBase",this.running=!1,this.worker=e,this.worker.onerror=e=>{if(e.message)throw Error(`${this.name}: Could not create Web Worker with error "${e.message}"`);throw Error(`${this.name}: Could not create Web Worker.`)}}runTask(){}generate(...e){if(this.running)throw Error("GenerateMeshBVHWorker: Already running job.");if(null===this.worker)throw Error("GenerateMeshBVHWorker: Worker has been disposed.");this.running=!0;let t=this.runTask(this.worker,...e);return t.finally(()=>{this.running=!1}),t}dispose(){this.worker.terminate(),this.worker=null}}}),h("bSef7",function(e,t){var r=u("7ryUf");let n=new URL("generateMeshBVH.worker.17f4c1c5.js",import.meta.url);e.exports=r(n.toString(),n.origin,!0)}),h("7ryUf",function(e,t){e.exports=function(e,t,r){if(t===self.location.origin)return e;var n=r?"import "+JSON.stringify(e)+";":"importScripts("+JSON.stringify(e)+");";return URL.createObjectURL(new Blob([n],{type:"application/javascript"}))}}),u("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["3xzEA","voxelize.87c0ff13.js","6J6WW","generateMeshBVH.worker.17f4c1c5.js","acVmZ","generateMeshBVH.worker.aad48e6e.js","gr8Yf","asyncGenerate.22609466.js","j19h5","asyncGenerate.e8b1599c.js","30Pwg","asyncGenerate.77ce35af.js","2tzBs","characterMovement.89c1b67b.js","6UuCC","characterMovement.5fc59dbe.js","6mMEU","characterMovement.fc8349f1.js","i0zVc","clippedEdges.dcf40b33.js"]'));var p=u("ilwiq"),f=u("7lx9d"),m=u("kp7Te"),w=u("c8CJQ"),g=u("jiuw3"),y=u("ff8ed"),x=u("5Rd1x"),b=u("apoN1"),M=u("8todg");let v=!1,B=null;const k={model:"Torus Knot",scale:.75,resolution:30,solid:!0,displayMesh:!0,displayBounds:!1,insideOnly:!1,rebuild:()=>v=!0},S={};(function(){document.getElementById("output"),(e=new p.WebGLRenderer({antialias:!0})).setPixelRatio(window.devicePixelRatio),e.setSize(window.innerWidth,window.innerHeight),e.setClearColor(1449501,1),e.outputEncoding=p.sRGBEncoding,document.body.appendChild(e.domElement),r=new p.Scene;let i=new p.DirectionalLight(16777215,1);i.position.set(3,6,9),r.add(i);let s=new p.DirectionalLight(16777215,.1);s.position.set(-3,-6,-9),r.add(s);let l=new p.AmbientLight(16777215,.25);r.add(l),(t=new p.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,50)).position.set(1,.5,1),t.far=100,t.updateProjectionMatrix(),new x.OrbitControls(t,e.domElement),o=new(w&&w.__esModule?w.default:w),document.body.appendChild(o.dom);let d=new p.MeshBasicMaterial({transparent:!0,wireframe:!0,depthWrite:!1,opacity:.02});new(0,f.GLTFLoader)().setMeshoptDecoder(m.MeshoptDecoder).load("https://raw.githubusercontent.com/gkjohnson/3d-demo-data/main/models/happy-buddha/buddha.glb",e=>{let t=e.scene.children[0];t.geometry.center(),t.material=d,t.scale.setScalar(1.5),t.rotation.y=-Math.PI/2,new M.GenerateMeshBVHWorker().generate(t.geometry).then(e=>{r.add(t),S.Buddha={model:t,bvh:e},"Buddha"===k.model&&(v=!0)})}),new(0,f.GLTFLoader)().setMeshoptDecoder(m.MeshoptDecoder).load("https://raw.githubusercontent.com/gkjohnson/3d-demo-data/main/models/stanford-bunny/bunny.glb",e=>{let t=e.scene.children[0];t.geometry.center(),t.material=d,t.rotation.y=Math.PI/2,t.scale.setScalar(.65),new M.GenerateMeshBVHWorker().generate(t.geometry).then(e=>{r.add(t),S.Bunny={model:t,bvh:e},"Bunny"===k.model&&(v=!0)})});{let e=new p.Mesh(new p.TorusKnotGeometry(.3,.1,400,60),d),t=new y.MeshBVH(e.geometry);r.add(e),S["Torus Knot"]={bvh:t,model:e},v=!0}S.Buddha={model:null,bvh:null},S.Bunny={model:null,bvh:null};let c=new p.Mesh(new p.BoxGeometry);(a=new p.BoxHelper(c,16777215)).material.opacity=.35,a.material.transparent=!0,r.add(a),(n=new g.GUI).add(k,"model",Object.keys(S)).onChange(()=>{v=!0});let u=n.addFolder("voxelize");u.add(k,"resolution",5,75,1).onChange(()=>{v=!0}),u.add(k,"scale",.1,4).onChange(()=>{v=!0}),u.add(k,"solid").onChange(()=>{v=!0}),u.add(k,"insideOnly").onChange(()=>{v=!0}),u.add(k,"rebuild");let h=n.addFolder("helpers");h.add(k,"displayMesh"),h.add(k,"displayBounds"),window.addEventListener("resize",function(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)},!1)})(),function n(){if(o.update(),requestAnimationFrame(n),r.updateMatrixWorld(!0),v&&(B=function*(){let e=k.resolution,t=e**3,n=k.scale,o=n/e,a=new p.Color(16777215),s=new p.Color(16761095).convertSRGBToLinear();i&&i.instanceMatrix.count!==t&&(i.material.dispose(),i.dispose(),i.parent.remove(i),i=null);let{model:l,bvh:d}=S[k.model];if(!l)return;i||((i=new p.InstancedMesh(new b.RoundedBoxGeometry(1,1,1,4,.1),new p.MeshStandardMaterial,t)).setColorAt(0,a),r.add(i));let c=-n/2+.5*o,u=new p.Vector3,h=new p.Quaternion,f=new p.Vector3().setScalar(o),m=new p.Matrix4,w=new p.Box3,g=new p.Matrix4().copy(l.matrixWorld).invert(),y=new p.Ray;y.direction.set(0,0,1);let x=0;for(let t=0;t<e;t++)for(let r=0;r<e;r++)for(let n=0;n<e;n++){if(u.set(c+r*o,c+t*o,c+n*o),w.min.setScalar(-.5*o).add(u),w.max.setScalar(.5*o).add(u),d.intersectsBox(w,g))!k.insideOnly&&(m.compose(u,h,f),i.setMatrixAt(x,m),i.setColorAt(x,a),i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,x++);else if(k.solid){y.origin.copy(u).applyMatrix4(g);let e=d.raycastFirst(y,2);e&&e.face.normal.dot(y.direction)>0&&(m.compose(u,h,f),i.setMatrixAt(x,m),i.setColorAt(x,s),i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,x++)}i.count=x,yield}i.count=x}(),v=!1),B){let e=window.performance.now();for(;window.performance.now()-e<16;)if(B.next().done){B=null;break}}for(let e in a&&(a.object.scale.setScalar(k.scale),a.object.updateMatrixWorld(!0),a.update()),S){let t=S[e];t.model&&(t.model.visible=!1)}let{model:s}=S[k.model];s&&(s.visible=k.displayMesh,a.visible=k.displayBounds),e.render(r,t)}();
//# sourceMappingURL=voxelize.87c0ff13.js.map
