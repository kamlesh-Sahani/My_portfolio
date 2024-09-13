// schema.js

export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
      {
        name: 'year',
        title: 'Year',
        type: 'string', 
      },
      {
        name: 'roles',
        title: 'Roles',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'role_name',
                title: 'Role Name',
                type: 'string',
              },
              {
                name: 'company_name',
                title: 'Company Name',
                type: 'string',
              },
            ],
          },
        ],
      },
    ],
  };
  