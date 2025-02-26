export interface UserData {
  key: string;
  id: string;
  name: string;
  email: string;
  phone: string;
  dob: string;
  location: string;
  avatar: string;
}

export interface BoosterPackage {
  key: string;
  id: string;
  price: string;
  duration: string;
  reboost: number;
  packageName: string;
  profileBooster: string;
  eventBooster: string;
  bonusProfileBooster: string;
}
