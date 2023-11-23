function solution(new_id) {
    let temp = new_id.toLowerCase();
    temp = temp.replace(/[^a-z0-9-_.]/g, "")
           .replace(/\.{2,}/g, ".")
           .replace(/^[.]|[.]$/g, "");

    if(temp === '') {
        temp = 'a';
        }

    if(temp.length > 15) {
        temp = temp.substring(0, 15);
        temp = temp.replace(/[.]$/g, "");
    }
    
    while(temp.length < 3) {
        temp += temp[temp.length - 1];
    }
    

    return temp;
}