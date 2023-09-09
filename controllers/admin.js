const Item = require('../models/items');

exports.getItems = async ( req,res,next)=>{
    try{
        const items = await Item.findAll();
        res.status(200).json({items:items});
    }
    catch(err){
        console.log(err)
    }
}

exports.getItem = async ( req,res,next)=>{
    const id = req.params.itemId;
    console.log(id)
    try{
        const item = await Item.findByPk(id);
        res.status(200).json({items:item});
    }
    catch(err){
        console.log(err)
    }

}

exports.updateItem = async ( req,res,next)=>{
    const id = req.params.itemId;
    try{
        const item = await Item.findByPk(id);
        item.quantity=req.body.quantity;
        item.save();
        res.status(201).json({msg:'updated'});
        }
    catch(err){
        console.log(err);
        }
    }
exports.addItem = async ( req,res,next)=>{
        const name = req.body.name;
        const description = req.body.description;
        const price = req.body.price;
        const quantity = req.body.quantity;
        try{
            const item = await Item.create({
                name:name,
                description:description,
                price:price,
                quantity:quantity
            })
            res.status(201).json({items:item});
        }
        catch(err){
            console.log(err)
        }
    
}