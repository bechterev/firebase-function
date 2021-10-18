import * as fbFunction from 'firebase-functions';

export const moderator = fbFunction.database.ref('/api/books').onWrite((change)=>{
    const value = change.after.val();
    let newValue = Object.assign({},value);
    if(value && !value.description){
        newValue.description = 'Скоро здесь будет описание...';
        if(!value.sanitized){
            return change.after.ref.update({newValue,sanitized:true})
        }
        return null;
    }

})