"use client";

import { lusitana } from "@/app/ui/fonts";
import {
   AtSymbolIcon,
   KeyIcon,
   ExclamationCircleIcon,
   ClipboardIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "./button";
import { useActionState } from "react";
import { authenticate } from "@/app/lib/actions";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
   const searchParams = useSearchParams();
   const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
   const [errorMessage, formAction, isPending] = useActionState(
      authenticate,
      undefined
   );
   const [copied, setCopied] = useState("");

   const handleCopy = (text: string, field: string) => {
      navigator.clipboard.writeText(text);
      setCopied(field);
      setTimeout(() => setCopied(""), 2000);
   };

   return (
      <form action={formAction} className="space-y-3">
         <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
            <h1 className={`${lusitana.className} mb-3 text-2xl`}>
               Please log in to continue.
            </h1>
            <div className="w-full">
               <div>
                  <label
                     className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                     htmlFor="email"
                  >
                     Email
                  </label>
                  <div className="relative">
                     <input
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        required
                     />
                     <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                  </div>
               </div>
               <div className="mt-4">
                  <label
                     className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                     htmlFor="password"
                  >
                     Password
                  </label>
                  <div className="relative">
                     <input
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        required
                        minLength={6}
                     />
                     <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                  </div>
               </div>
            </div>
            <input type="hidden" name="redirectTo" value={callbackUrl} />
            <Button className="mt-4 w-full" aria-disabled={isPending}>
               Log in{" "}
               <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
            </Button>
            <div className="flex h-8 items-end space-x-1">
               {/* Add form errors here */}
               {errorMessage && (
                  <>
                     <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                     <p className="text-sm text-red-500">{errorMessage}</p>
                  </>
               )}
            </div>
         </div>
         <div className="text-center text-xs text-gray-500">
            <p className="mb-2">Test credentials:</p>
            <div className="flex items-center justify-center space-x-2">
               <span>
                  <strong>Email:</strong> user@nextmail.com
               </span>
               <button
                  type="button"
                  onClick={() => handleCopy("user@nextmail.com", "email")}
                  className="rounded-md p-1 hover:bg-gray-100"
               >
                  {copied === "email" ? (
                     <span className="text-xs text-green-600">Copied!</span>
                  ) : (
                     <ClipboardIcon className="h-4 w-4 text-gray-500" />
                  )}
               </button>
            </div>
            <div className="flex items-center justify-center space-x-2">
               <span>
                  <strong>Password:</strong> 123456
               </span>
               <button
                  type="button"
                  onClick={() => handleCopy("123456", "password")}
                  className="rounded-md p-1 hover:bg-gray-100"
               >
                  {copied === "password" ? (
                     <span className="text-xs text-green-600">Copied!</span>
                  ) : (
                     <ClipboardIcon className="h-4 w-4 text-gray-500" />
                  )}
               </button>
            </div>
         </div>
      </form>
   );
}
