import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
    slug: "users", // name of collection
    auth: {
        verify: {
            generateEmailHTML: ({token}) => {
                return `<a href='${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}'>Verify account</a>`
            }
        }
    },
    access: {
        read: () => true, //all users can read (for now)
        create: () => true, //any user can add other user
    },
    fields: [
        {
            name: "role", //types of users: 'Admin' and 'Users'-> 'Seller' & 'Buyers'
            defaultValue: 'user',
            required: true,

            type: "select",
            options: [
                {label: "Admin", value: "admin"},
                {label: "User", value: "user"},
            ],
        },
    ],
}