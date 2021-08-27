window.onload = () => {
 
    render();
  };
  
  const models = [
   
    // {
    //   url: './assets/asset.glb',
    //   scale: '2 2 2',
    //   rotation: '0 225 0'
    // },
    {
      url: './assets/bird/scene.gltf',
      scale: '0.08 0.08 0.08',
      rotation: '0 225 0'
    },{
        url: './assets/flower/scene.gltf',
        scale: '0.08 0.08 0.08',
        rotation: '0 225 0'
      },
  ];
  
  let modelIndex = 0;
  const setModel = (model, entity) => {
    if (model.scale) {
      entity.setAttribute('scale', model.scale);
    }
  
    if (model.rotation) {
      entity.setAttribute('rotation', model.rotation);
    }
  
    if (model.position) {
      entity.setAttribute('position', model.position);
    }
  
    entity.setAttribute('gltf-model', model.url);
  };
  
  // <a-entity rotation="180 90 0" animation="property: rotation; to: 20 -360 -180; loop: true; dur: 50000">
  // <a-sphere material="shader:displacement-offset" myoffset-updater scale="1 1 1" radius="1" position="0 8 -5"
  //   segments-height="50" segments-width="50">
  //   <a-animation attribute="rotation" direction="alternate-reverse" dur="5000" from="1 1 1" to="2 2 2 "
  //     repeat="indefinite"></a-animation>
  // </a-sphere>

  // should update scale via three.js 




  const setShader = (shaderObj, entity)=>{

    if (shaderObj.scale) {
     // entity.setAttribute('scale', shaderObj.scale);
      entity.object3D.scale.set(1, 2, 3);

      console.log("shader obj scale set to 123 should be "+shaderObj.object3D.scale);
    }
  
    if (shaderObj.rotation) {
      entity.setAttribute('rotation', shaderObj.rotation);
    }
  
    if (shaderObj.position) {
      entity.setAttribute('position', shaderObj.position);
    }


entity.setAttribute('material', shaderObj.material);


  };

  // should place the model in an offset within the range of the device position
  // allow zoom in zoom out?
  // set the height of the thing to be above the floor/phone level 
  // allow front and back camera 
  function render() {
    const scene = document.querySelector('a-scene');
    const offset = 2; // only for testing 
    navigator.geolocation.getCurrentPosition(function (position) {
    
    //   const latitude = position.coords.latitude + offset;
    //   const longitude = position.coords.longitude + offset;
  
      const model = document.createElement('a-entity');
     // model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
      setModel(models[modelIndex], model);
  const shaderObj = document.getElementById('example');
      setShader(shaderObj,shaderObj);
      
      model.setAttribute('animation-mixer', 'repeat');
  
    //   document.querySelector('button[data-action="change"]').addEventListener('click', function () {
    //     const entity = document.querySelector('[gps-entity-place]');
    //     modelIndex++;
    //     const newIndex = modelIndex % models.length;
    //     setModel(models[newIndex], entity);
    //   });
      scene.appendChild(model);
    });
  }