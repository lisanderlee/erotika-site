import React, { use, useState } from 'react'
import { PhotoIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useDropzone } from 'react-dropzone'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useCallback } from 'react'
import Image from 'next/image'
import { Loading } from './Loading'
import { Suspense } from 'react'

export default function UploadProfileWidget({
  profileImagesToUpload,
  setProfileImagesToUpload,
}) {
  const [selectedImages, setSelectedImages] = useState([])
  const supabase = createClientComponentClient()
  const [urlToShow, setUrlToShow] = useState(null)
  const [uploading, setUploading] = useState(false)
  const uploadedUrls = []

  const onDrop = useCallback(async (acceptedFiles) => {
    setUploading(true)
    for (const file of acceptedFiles) {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const { data, error } = await supabase.storage
        .from('images')
        .upload(fileName, file)

      if (error) {
        console.error('Error uploading file: ', error)
        continue
      }
      const fileUrl = `${supabase.storageUrl}/object/public/images/${fileName}`
      uploadedUrls.push(fileUrl)
      setProfileImagesToUpload(uploadedUrls)
    }
    setUploading(false)
  }, [])

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  async function deleteFile(pathname) {
    const pathSegments = pathname.split('/')
    const url = '/' + pathSegments[7] + '/' + pathSegments[8]

    try {
      console.log(url)
      const { data, error } = await supabase.storage.from('images').remove(url)

      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
    } finally {
    }
  }

  return (
    <section className="">
      <div className="col-span-full">
        <label
          htmlFor="cover-photo"
          className="block text-sm font-medium leading-6 text-white"
        >
          Artist Profile Image 1
        </label>
        <div
          className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10"
          {...getRootProps()}
        >
          <div className="text-center">
            <PhotoIcon
              className="mx-auto h-12 w-12 text-gray-500"
              aria-hidden="true"
            />
            <div className="mt-4 flex text-sm leading-6 text-gray-400">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-gray-900 font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:text-indigo-500"
              >
                <input
                  {...getInputProps()}
                  type="file"
                  name="images"
                  onChange={onDrop}
                  multiple
                  accept="image/png , image/jpeg, image/webp"
                />
              </label>
            </div>
            <p className="text-xs leading-5 text-gray-400">
              PNG, JPG up to 10MB
            </p>
          </div>
        </div>
      </div>
      {/* 
      {selectedImages.length > 0 &&
        (selectedImages.length > 10 ? (
          <p className="error">
            You can't upload more than 10 images! <br />
            <span>
              please delete <b> {selectedImages.length - 10} </b> of them{' '}
            </span>
          </p>
        ) : (
          <button
            className="upload-btn"
            onClick={() => {
              console.log(selectedImages)
            }}
          >
            UPLOAD {selectedImages.length} IMAGE
            {selectedImages.length === 1 ? '' : 'S'}
          </button>
        ))} */}

      <div className="mx-auto max-w-7xl ">
        <ul
          role="list"
          className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          {profileImagesToUpload &&
            profileImagesToUpload.map((url, index) => {
              return (
                <li key={index} className="relative">
                  <Image
                    className="aspect-[3/2] w-full rounded-2xl object-cover"
                    src={url}
                    height={200}
                    width={200}
                    alt="upload"
                  />
                  <button
                    className=" absolute -right-2 bottom-4 rounded-xl bg-red-600 p-2 hover:bg-red-500 "
                    onClick={() => deleteFile(url)}
                  >
                    <XMarkIcon className=" h-5 w-5 text-white" />
                  </button>
                </li>
              )
            })}
        </ul>
      </div>
    </section>
  )
}
