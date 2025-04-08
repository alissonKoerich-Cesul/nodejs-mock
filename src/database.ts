export const users = new Map();

export function seedUserStore(){
    users.set('biankato@cesul.com.br',{
        password: '123456',
        permissions: ['users.read','user.create'],
        roles: ['administrador']
    });

}

