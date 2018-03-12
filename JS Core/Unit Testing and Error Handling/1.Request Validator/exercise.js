function requestValidator(request){
   let methods=['GET','POST','DELETE','CONNECT'];
   let uriPattern=/^[*A-Za-z0-9.]+$/;
   let versions=['HTTP/0.9','HTTP/1.0','HTTP/1.1','HTTP/2.0'];
   let messagePattern=/^[^<>\\&'"]*$/;
    if(request.method==undefined || !methods.includes(request.method)){
        throw new Error('Invalid request header: Invalid '+'Method');
    }
    if(request.uri==undefined || !uriPattern.test(request.uri)){
        throw new Error('Invalid request header: Invalid '+'URI');
    }
    if(request.version==undefined || !versions.includes(request.version)){
        throw new Error('Invalid request header: Invalid '+'Version');
    }
    if(request.message==undefined || !messagePattern.test(request.message)){
        throw new Error('Invalid request header: Invalid '+'Message');
    }

    return request;
}

requestValidator({
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: 'asl\\pls'
    }
);