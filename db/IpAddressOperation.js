const IP = require('./schema/ipinfoschema');
const SINGLEIPOUTPUT = require('../model/oneipoutputoperation');
const IPOPERATIONS={
    FindbyIPS(req,res,ip){
        console.log('In S operation..',ip);
        IP.findOne({'start_ip_int':ip},(e,d)=>{
              console.log(d);
              console.log(d[0]);
        });
    },
    FindbyIPE(req,res,ip){
        console.log('In E operation..',ip);
        IP.findOne({'end_ip_int':ip},(e,d)=>{
              console.log(d);
              console.log(d[0]);
        });
    },
    FindbyIPSE(req,res,ips,ipe){
        console.log('In S E operation..',ips,ipe);
        IP.findOne({$and:[{'start_ip_int':ips},{'end_ip_int':ipe}]},(e,d)=>{
              console.log(d);
              console.log(d[0]);
        });
    },
    FindbyIP(req,res,ip){
        console.log('In operation..',ip);
        IP.find({$or:[{'start_ip_int':parseInt(ip)},{'end_ip_int':parseInt(ip)}]},(e,d)=>{
              console.log(d);
              console.log(d[0]);
              SINGLEIPOUTPUT.GetDatafromObj(d[0]);
              res.render('ipoutput',{OBJ:d[0],IP:ip});
        });
    }
}
module.exports = IPOPERATIONS;