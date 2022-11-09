import Image from 'next/image';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function Final({imgurl}) {

	const toastOption={
		position:"bottom-right",
		autoClose:3000,
		pauseOnHover:true,
		draggable:true,
		theme:"dark",
	}
	function copy() {
		var copyText = document.getElementById("myInput");
  		copyText.select();
	  	copyText.setSelectionRange(0, 99999); 
		navigator.clipboard.writeText(copyText.value);
		toast.success('Link copied to clipboard',toastOption)
	}

	return(
		<div className="flex py-5 md:py-10 rounded-3xl bg-white flex-col mx-auto shadow-2xl w-[93%] items-center justify-center"> 
			<img src="https://ik.imagekit.io/d3kzbpbila/check-512_tnnnkA00C.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1668018516504"
			alt=""
			className="h-10 w-10 mx-auto"
			/>
			<p className="text-2xl mt-5 font-semibold" >Successfully Uploaded</p>
			<div className="relative rounded-3xl h-80 w-[90%]">
				<Image src={imgurl} layout="fill"
				objectFit="contain"
				placeholder='blur'
				blurDataURL= "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAACAAMDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+U/wJ4q8T6z4ffVtX8R69quq6l4i8aX2o6nqWsahfahqF7deM9fmuby9vbq4lubq6uZneWe4nkkmmldpJHZmJP7tlvE/EsaGIceIc8i62a53iarjm2PTq4nF5zj8VisRUaxC56+JxNariMRVlepWr1alWpKVScpP/AEZ8K/AXwMzTgnL8Zmfgv4T5ji/7U4qwv1rH+HXB+MxH1bL+LM8wGAw/t8Rk9Sr7DBYDDYbBYSjzezw2Ew9DDUYwo0qcI//Z"
				alt=""
				className="mt-5 mx-auto"
				/>
			</div>
			<div className="flex border-2 p-[2px] rounded-2xl  mt-[60px] items-center justify-between gap-2 w-[90%] md:w-[70%]" >	
				<input id="myInput" className="truncate ml-3 outline-none w-[90%] text-gray-500" value={imgurl}/>
				<button className="p-2 bg-blue-500 text-white rounded-xl text-md font-semibold whitespace-nowrap"
				onClick={copy}
				>Copy Link</button>
			</div>
			<ToastContainer/>
		</div>
	)
}