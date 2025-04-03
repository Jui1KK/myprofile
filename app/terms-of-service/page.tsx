import Link from "next/link"
import SketchText from "@/components/sketch-text"
import SketchBorder from "@/components/sketch-border"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="container py-20">
        <div className="relative">
          <SketchBorder className="absolute inset-0" />
          <div className="p-8">
            <SketchText as="h1" className="text-3xl font-bold md:text-4xl">
              Terms of Service
            </SketchText>
            <div className="mt-8 space-y-6">
              <div>
                <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
                <p className="mt-2 text-black/70">
                  By accessing and using this website, you accept and agree to be bound by the terms and conditions of this agreement.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">2. Use License</h2>
                <p className="mt-2 text-black/70">
                  Permission is granted to temporarily view the materials (information or software) on this website for personal, non-commercial use only.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">3. Disclaimer</h2>
                <p className="mt-2 text-black/70">
                  The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">4. Contact Information</h2>
                <p className="mt-2 text-black/70">
                  If you have any questions about these Terms of Service, please contact us at siwatphenhpno@gmail.com
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