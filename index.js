import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

const yourBearerToken = "33a721e9-53bf-4c7a-844c-79777d478e4e";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  axios.get(API_URL,config)
  .then(function(response){
    console.log(response.data);
    res.render("index.ejs", { content: "Waiting for data..." });

  })
  .catch(function(error){
    console.log(error)
  })
});

app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    console.log(result.data)

    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/post-secret",  (req, res) => {
  // TODO 2: Use axios to POST the data from req.body to the secrets api servers.
  axios.post(`${API_URL}/secrets`,{
    id:req.body.id,
    secret:req.body.secret,
    score:req.body.score
  },config).then(function(response){
    console.log(response);
     res.render("index.ejs",{content:JSON.stringify(response.data)});

  }).catch(function(error){
     console.log(error);
  });
});

app.post("/put-secret",  (req, res) => {
  const searchId = req.body.id;
  axios.put(`${API_URL}/secrets/${searchId}`,req.body,config)
  .then(function(response){
    console.log("Response is "+response);
    console.log("Response data is "+ response.data);
    res.render("index.ejs",{content:JSON.stringify(response.data)})
  })
  .catch(function(error){
    console.log(error.message);
    res.render("index.ejs",{content:JSON.stringify(error.message)})
  })
  // TODO 3: Use axios to PUT the data from req.body to the secrets api servers.
});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  try{
    console.log(`request body of patch is ${typeof(req.body)}`);
    const result = await axios.patch(`${API_URL}/secrets/${searchId}`,req.body,config);
    console.log("patch response data is "+ JSON.stringify(result.data));
    res.render("index.ejs",{content:JSON.stringify(result.data)});
  }catch(err){
    res.render("index.ejs",{content:err.message});
    console.log(err.status);
  }
  
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  try{
    const result = await axios.delete(`${API_URL}/secrets/${searchId}`,config);
    console.log(result);
    res.render("index.ejs",{content:JSON.stringify(result.data.message)});
  }catch(err){
    res.render("index.ejs",{content:err.message})
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
