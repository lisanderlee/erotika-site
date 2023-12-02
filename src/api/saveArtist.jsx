// pages/api/saveArtist.js

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default async function handler(req, res) {
    const supabase = createClientComponentClient()
  if (req.method === 'POST') {
    // Extract data from request
    const {
      name,
      lastName,
      phone,
      email,
      location,
      category,
      event,
      description,
      portfolio,
      instagram,
      profileImagesToUpload,
      imagesToUpload,
    } = req.body

    // Save data to Supabase
    const { data, error } = await supabase.from('artists_table').insert([
      {
        name: name,
        last: lastName,
        phone: phone,
        category: category,
        event: event,
        description: description,
        instagram: instagram,
        link: portfolio,
        location: location,
        images: imagesToUpload,
        profile: profileImagesToUpload,
        email: email,
      },
    ])

    if (error) return res.status(500).json({ error: error.message })
    return res.status(200).json(data)
  }
}
