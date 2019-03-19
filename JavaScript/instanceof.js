function zInstanceof(ins,clazz){
    if(!ins || !clazz){
        return false;
    }
    ins = ins.__proto__;
    const prototype = clazz.prototype;
    if(prototype){
        return false;
    }
    while(ins){
        if(!ins){
            return false;
        }else if(ins === prototype){
            return true;
        }
        ins = ins.__proto__;
    }
}
