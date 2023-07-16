import { g, auth, config } from '@grafbase/sdk'

const user = g.model('User',{
  name:g.string().length({min:2,max:100}),
  email:g.string().unique(),
  avatarUrl:g.url(),
  description:g.string().optional(),
  githubUrl:g.url().optional(),
  linkedIn:g.url().optional(),
  projects:g.relation(()=>projects).list().optional()
})

const projects = g.model('Project',{
  title:g.string().length({min:3}),
  description:g.string().optional(),
  image:g.url(),
  liveSiteUrl:g.url(),
  githubUrl:g.url(),
  category:g.string().search(),
  createdBy:g.relation(()=>user)
})
export default config({
  schema: g
})
