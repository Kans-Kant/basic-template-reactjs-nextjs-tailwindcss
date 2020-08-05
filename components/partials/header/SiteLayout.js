import Link from "next/link";

const SiteLayout = ({ children }) => (
  <div className="bg-white antialiased">
    <div>
      <div>
        <div className="px-8">
          <nav>
            <div className="py-4 flex-shrink-0 flex items-center">
              <img className="h-8 w-8" src="/logo.svg" alt="" />
              <div className="mx-auto flex">
              <Link href="/">
                <a className="ml-8 font-medium text-gray-900">Home</a>
              </Link>
              <Link href="/login">
                <a className="ml-8 font-medium text-gray-900">Login</a>
              </Link>
              <Link href="/register">
                <a className="ml-8 font-medium text-gray-900">Register</a>
              </Link>
              <Link href="/account-settings/basic-information">
                <a className="ml-8 font-medium text-gray-900">
                  Account Settings
                </a>
              </Link>
              <div className="mx-2">
              <input
                className="block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                placeholder="Search..."
              />
            </div>
             </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div className="mt-6 sm:mt-0 sm:py-12">{children}</div>
    <footer className='w-full text-center border-t border-grey p-4 pin-b'>
            This is our footer
        </footer> 
  </div>
);

export const getLayout = page => <SiteLayout>{page}</SiteLayout>;

export default SiteLayout;
