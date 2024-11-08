"use strict";
{
    const updateProfile = (profile, updates) => (Object.assign(Object.assign({}, profile), updates));
    const userProfile = {
        name: 'Alice',
        age: 30,
        email: 'alice@example.com',
    };
    const updatedProfile = updateProfile(userProfile, { age: 31 });
}
