export function findById(someArray, id) {
    return someArray.find(item => item.id === id);
}


export function setUser(formData) {
    const user = {
        name: formData.get('name'),
        element: formData.get('element'),
        jp: 0,
        cp: 0,
        completed: {},
    };

    const stringyUser = JSON.stringify(user);
    localStorage.setItem('USER', stringyUser);
}