import Bio from './index'

export default {
  title: 'Components/Bio',
  component: Bio,
}

export const Default = () => (
  <Bio
    headShot="https://pbs.twimg.com/profile_images/1355118779974475776/9qZHpzCF_400x400.jpg"
    name="Four Sqweez"
    tagline="I don't know"
    role="Frontend developer"
  />
)
