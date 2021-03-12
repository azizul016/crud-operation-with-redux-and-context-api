export const readSingleData = (id) =>{
    return{
        type: 'Read_Data',
        id
    }
}
export const createSingleData = (data) =>{
    return{
        type: 'Create_Data',
        data,
    }
}
export const updateSingleData = (data) =>{
    return{
        type: 'Update_Data',
        data
    }
}
export const deleteSingleData = (id) =>{
    return{
        type: 'Delete_Data',
        id
    }
}
