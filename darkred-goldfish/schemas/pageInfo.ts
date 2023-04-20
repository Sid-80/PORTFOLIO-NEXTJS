import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'pageInfo',
  type: 'document',
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "myImage",
      title: "Image",
      type: "image",
      options:{
        hotspot:true
      }
    },
    {
      name: "myImage2",
      title: "Image2",
      type: "image",
      options:{
        hotspot:true
      }
    },
    {
      name: "backgroundInfo",
      title: "BackgroundInfo",
      type: "string",
    },
    {
      name: "profilePic",
      title: "ProfilePic",
      type: "image",
      options:{
        hotspot:true,
      }
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "phoneNo",
      title: "PhoneNo",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of:[{type: "reference",to:{ type: "social"} }],
    }
  ],
})
