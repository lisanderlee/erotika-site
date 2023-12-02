import { XMarkIcon } from '@heroicons/react/24/solid'
import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Image from 'next/image'

function ImageUploadComponent({ currentImages, setCurrentImages, setImagePathsUpload }) {
  const [images, setImages] = useState([])
  const [uploading, setUploading] = useState(false)
  const supabase = createClientComponentClient()
 
  const onDrop = useCallback((acceptedFiles) => {
    // Add the new files to the current images array
    setImages((prevImages) => [
      ...prevImages,
      ...acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      ),
    ])
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    // accept: 'image/*',
  })

  // const removeUrl = (url) => {
  //   setCurrentImages(currentImages.filter((current) => current !== url))
  // }

  const removeImage = (file) => {
    setImages(images.filter((image) => image !== file))
  }

  const uploadImages = async () => {
    setUploading(true)

    // Initialize an array to hold the URLs of the uploaded images
    const uploadedImageUrls = []

    for (let image of images) {
      const filePath = `uploads/${Date.now()}-${image.name}`

      try {
        const { data, error } = await supabase.storage
          .from('images')
          .upload(filePath, image, {
            cacheControl: '3600',
            upsert: false,
          })

        if (error) {
          console.error('Error uploading image:', error.message)
        } else {
          // Construct the URL for the uploaded image and add it to the array
          const url = `https://grgbwbcnguxjlihzzawp.supabase.co/storage/v1/object/public/images/${filePath}`
          uploadedImageUrls.push(url)
          setImagePathsUpload(uploadedImageUrls)
        }
      } catch (error) {
        console.error('Error during upload:', error.message)
      }
    }

    // Do something with the array of URLs, such as updating a state or sending to a backend

    setImages([])
    setUploading(false)
  }

  return (
    <div>
      <div
        {...getRootProps()}
        style={{
          border: '2px dashed #ccc',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <input {...getInputProps()} />
        Drag and drop some images here, or click to select images
      </div>
      <div className="mx-auto max-w-7xl ">
        <ul
          role="list"
          className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          {images.map((file, index) => (
            <div key={index}>
              <li key={index} className="relative">
                <Image
                  className=" w-full rounded-2xl object-cover"
                  src={file.preview}
                  alt={`Preview ${index}`}
                  height={150}
                  width={200}
                />

                <button
                  className=" absolute bottom-4 right-0 rounded-xl bg-red-600 p-2 hover:bg-red-500 "
                  onClick={() => removeImage(file)}
                >
                  <XMarkIcon className=" h-5 w-5 text-white" />
                </button>
              </li>
            </div>
          ))}
        </ul>
      </div>
      {/* <div className="mx-auto max-w-7xl ">
        <ul
          role="list"
          className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          {currentImages.map((url, index) => (
            <div key={index}>
              <li key={index} className="relative">
                <Image
                  className=" w-full rounded-2xl object-cover"
                  src={url}
                  alt={`Preview ${index}`}
                  height={150}
                  width={200}
                />

                <button
                  className=" absolute bottom-4 right-0 rounded-xl bg-red-600 p-2 hover:bg-red-500 "
                  onClick={() => removeUrl(url)}
                >
                  <XMarkIcon className=" h-5 w-5 text-white" />
                </button>
              </li>
            </div>
          ))}
        </ul>
      </div> */}
      {images && images.length > 0 && (
        <button
          className=" mt-10 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          onClick={uploadImages}
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Submit'}
        </button>
      )}
    </div>
  )
}

export default ImageUploadComponent
