const router = require('express').Router();
const ip = require('ip');
const iplocation = require('iplocation').default;


router.get('', function(req, res){


    let myip = ip.address();
    console.log(myip);

    iplocation(myip, [], (err, location)=>{
        if(!err){
            res.json({
                'success': true,
                'location': location
            });

        } else {

            res.json({
                'success': false,
                'error': err
            });
        }
        
    });
});


module.exports = router;