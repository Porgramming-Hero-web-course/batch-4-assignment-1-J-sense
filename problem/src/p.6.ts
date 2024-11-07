{
    interface Profile {
        name: string;
        age: number;
        email: string;
      }
      const updateProfile = (profile: Profile, updates: Partial<Profile>): Profile => ({
        ...profile,
        ...updates
      });
      const userProfile: Profile = {
        name: 'Alice',
        age: 30,
        email: 'alice@example.com',
      };
      const updatedProfile = updateProfile(userProfile, { age: 31 });
}