var express = require('express');
var router = express.Router();
const  phoneModelVariable  =  require("../models/phoneLoveModel");
const addCloudinary = require("../config/cloudinary");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage.hbs');
});

router.get("/about",(req,res,next) => {
  res.render("about.hbs")
})

//this create createProduct.hbs (NOT CRUD)
router.get('/createProduct', (req, res,next) => {
  res.render("createProduct.hbs")
});


router.post("/createProductAction",(req,res,next) => {

  // C - CRUD
    phoneModelVariable.create(req.body).then(dbResult => {
      res.redirect("/");
    }).catch(error => {
      console.log(error)
    })

});

// R - CRUD
router.get("/allPhones", async (req, res) => {
  const phoneToViews = await phoneModelVariable.find();
  res.render("listOfPhones.hbs", { phoneToViews });
  
});

// U - CRUD NOT FINISHED

router.get("/phone/update/:id", async (req,res) => {
 
  const onePhoneToView = await phoneModelVariable.findById(req.params.id);

  res.render("formUpdatePhones.hbs", {phone: onePhoneToView})
}
);
/*   res.redirect("/allPhones");
  }catch (err) {
  console.log(err); */


//go to database through the model to fetch data and findbyid the phone you wanto to update
//send this infor from database promise to the view (look at Delete router)


router.post("/updateProductAction/:id",addCloudinary.single("image"), async (req, res) => {
  if (req.file){
    req.body.image = req.file.path;
  }
  try {
    /* console.log("req----------",req); */
    const updatedPhoneView = await phoneModelVariable.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // true: give me the updated documebnt back (default: false)
    );
    console.log(updatedPhoneView);
    res.redirect("/allPhones");
  } catch (err) {
    console.log(err);
  }
});


// D - Crud

router.get("/phone/delete/:id", async (req, res) => {
  try {
/*     console.log("req----------",req);
    console.log("req.params-------", req.params);
    console.log("req.params.id-------",req.params.id); */
    const deletedPhone = await phoneModelVariable.findByIdAndDelete(req.params.id);
      res.redirect("/allPhones");
  }catch (err) {
    console.log(err);
  }
  });


module.exports = router;







//CRUD ONLY FOR INTERACTING WITH DATABASE