const WebSocket = require('ws');
const generateName =  require('../names');
const Vote = require('../models/Vote');
 
const Data = {
  title: 'OS',
  options: ["windows","MacOS", "Linux", "Other"],
  updatedAt: new Date(2018, 0, 1, 9, 0),
  
};

function postProcessing(collection){
    return collection.map(it => {
        return {name: it.choice, votes: it.points}
    })
}
function startPollService(port){
const wss = new WebSocket.Server({ port: port });

wss.on('connection', async function connection(ws) {
  console.log("new client connected...")
  const initForm = JSON.stringify({type: "init", title: Data.title, options: Data.options})
  const tmp = await Vote.find()
  const base_results = postProcessing(tmp)
  const initCanvas = JSON.stringify({type:"poll_update", payload: base_results})


   ws.send(initForm)
   ws.send(initCanvas)

  ws.on('message', async (message) => {
      console.log(`msg arrived: ${message}`)
    try{
      const resultsArr = await Vote.find({choice: message})
      const choice = resultsArr[0]
      choice.points += 1
      const result = await choice.save()
      console.log(result)
      const temp = await Vote.find()
      const msg = postProcessing(temp)
      const command = JSON.stringify({type:"poll_update", payload: msg})

      wss.clients.forEach(function each(client) {
          if (client.readyState === WebSocket.OPEN) {
            client.send(command);
          }
        });
  
     }catch (err){
         console.log(err)
  
     }
  })

 });

}

module.exports = startPollService
