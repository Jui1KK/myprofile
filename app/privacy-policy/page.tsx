import Link from "next/link"
import SketchText from "@/components/sketch-text"
import SketchBorder from "@/components/sketch-border"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="container py-20">
        <div className="relative">
          <SketchBorder className="absolute inset-0" />
          <div className="p-8">
            <SketchText as="h1" className="text-3xl font-bold md:text-4xl">
              Privacy Policy
            </SketchText>
            <div className="mt-8 space-y-6">
              <div>
                <h2 className="text-xl font-semibold">Information Collection</h2>
                <p className="mt-2 text-black/70">
                  We only collect information that you voluntarily provide through the contact form, including your name and email address.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Use of Information</h2>
                <p className="mt-2 text-black/70">
                  The information we collect is used solely to respond to your inquiries and will not be shared with third parties.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Data Security</h2>
                <p className="mt-2 text-black/70">
                  We implement appropriate security measures to protect your personal information.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Contact</h2>
                <p className="mt-2 text-black/70">
                  If you have any questions about this Privacy Policy, please contact us at siwatphenhpno@gmail.com
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/" className="text-black/70 hover:text-black hover:underline">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}