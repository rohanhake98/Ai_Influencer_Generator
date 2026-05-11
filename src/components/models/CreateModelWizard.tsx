"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, ChevronLeft, Sparkles, Upload, User, Calendar, Tag, Palette } from "lucide-react"
import { cn } from "@/lib/utils"

const steps = [
  { id: 1, title: "Gender", description: "Select your model's gender identity", icon: User },
  { id: 2, title: "Age Range", description: "Choose the target age for your influencer", icon: Calendar },
  { id: 3, title: "Niche", description: "Select content categories", icon: Tag },
  { id: 4, title: "Style & Tone", description: "Define the visual aesthetic", icon: Palette },
  { id: 5, title: "Reference", description: "Upload visual guides (Optional)", icon: Upload },
]

const genderOptions = ["Male", "Female", "Non-binary", "Ambiguous"]
const ageOptions = ["18–24", "25–34", "35–44", "45+"]
const nicheOptions = ["Fashion", "Tech", "Fitness", "Finance", "Food", "Travel", "Gaming", "Beauty", "Lifestyle"]
const styleOptions = ["Professional", "Casual", "Edgy", "Minimalist", "Luxury", "Playful"]

export function CreateModelWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    gender: "",
    ageRange: "",
    niches: [] as string[],
    style: "",
  })

  const handleNext = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1)
  }

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const toggleNiche = (niche: string) => {
    setFormData(prev => ({
      ...prev,
      niches: prev.niches.includes(niche) 
        ? prev.niches.filter(n => n !== niche) 
        : [...prev.niches, niche]
    }))
  }

  return (
    <div className="max-w-3xl mx-auto py-10">
      {/* Progress Stepper */}
      <div className="mb-12">
        <div className="flex justify-between relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-surface-container -translate-y-1/2 z-0" />
          <div 
            className="absolute top-1/2 left-0 h-0.5 bg-primary transition-all duration-300 -translate-y-1/2 z-0" 
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          />
          {steps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center">
              <div 
                className={cn(
                  "size-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                  currentStep >= step.id 
                    ? "bg-primary border-primary text-white" 
                    : "bg-surface border-outline/20 text-on-surface-variant"
                )}
              >
                <step.icon className="size-5" />
              </div>
              <span className={cn(
                "mt-2 text-xs font-medium transition-colors duration-300",
                currentStep >= step.id ? "text-on-surface" : "text-on-surface-variant"
              )}>
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Card className="border-outline/10 overflow-hidden">
        <CardHeader className="bg-surface-container-low/50 border-b border-outline/10 p-8">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">{steps[currentStep-1].title}</CardTitle>
              <CardDescription className="text-on-surface-variant mt-1">
                {steps[currentStep-1].description}
              </CardDescription>
            </div>
            <Badge variant="outline" className="px-3 py-1 border-primary/20 text-primary bg-primary/5">
              Step {currentStep} of 5
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="p-8 min-h-[300px]">
          {currentStep === 1 && (
            <div className="grid grid-cols-2 gap-4">
              {genderOptions.map(option => (
                <button
                  key={option}
                  onClick={() => setFormData({ ...formData, gender: option })}
                  className={cn(
                    "p-6 rounded-xl border-2 text-left transition-all hover:bg-surface-bright",
                    formData.gender === option 
                      ? "border-primary bg-primary/5 text-primary" 
                      : "border-outline/10 bg-surface-container-lowest text-on-surface"
                  )}
                >
                  <span className="font-medium text-lg">{option}</span>
                </button>
              ))}
            </div>
          )}

          {currentStep === 2 && (
            <div className="grid grid-cols-2 gap-4">
              {ageOptions.map(option => (
                <button
                  key={option}
                  onClick={() => setFormData({ ...formData, ageRange: option })}
                  className={cn(
                    "p-6 rounded-xl border-2 text-left transition-all hover:bg-surface-bright",
                    formData.ageRange === option 
                      ? "border-primary bg-primary/5 text-primary" 
                      : "border-outline/10 bg-surface-container-lowest text-on-surface"
                  )}
                >
                  <span className="font-medium text-lg">{option}</span>
                </button>
              ))}
            </div>
          )}

          {currentStep === 3 && (
            <div className="flex flex-wrap gap-3">
              {nicheOptions.map(option => (
                <button
                  key={option}
                  onClick={() => toggleNiche(option)}
                  className={cn(
                    "px-6 py-3 rounded-full border-2 transition-all hover:scale-105",
                    formData.niches.includes(option)
                      ? "border-secondary bg-secondary/10 text-secondary"
                      : "border-outline/10 bg-surface-container-lowest text-on-surface"
                  )}
                >
                  <span className="font-medium">{option}</span>
                </button>
              ))}
            </div>
          )}

          {currentStep === 4 && (
            <div className="grid grid-cols-2 gap-4">
              {styleOptions.map(option => (
                <button
                  key={option}
                  onClick={() => setFormData({ ...formData, style: option })}
                  className={cn(
                    "p-6 rounded-xl border-2 text-left transition-all hover:bg-surface-bright",
                    formData.style === option 
                      ? "border-accent bg-accent/5 text-accent" 
                      : "border-outline/10 bg-surface-container-lowest text-on-surface"
                  )}
                >
                  <span className="font-medium text-lg">{option}</span>
                </button>
              ))}
            </div>
          )}

          {currentStep === 5 && (
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-outline/20 rounded-xl p-12 bg-surface-container-lowest">
              <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Upload className="size-8 text-primary" />
              </div>
              <p className="text-on-surface font-medium mb-1">Click to upload reference images</p>
              <p className="text-sm text-on-surface-variant mb-6 text-center max-w-xs">
                Upload up to 5 images to help the AI understand your desired visual style.
              </p>
              <Button variant="outline" className="border-outline/20">Select Files</Button>
            </div>
          )}
        </CardContent>

        <CardFooter className="bg-surface-container-low/30 border-t border-outline/10 p-6 flex justify-between">
          <Button 
            variant="ghost" 
            onClick={handleBack} 
            disabled={currentStep === 1}
            className="text-on-surface-variant hover:text-on-surface"
          >
            <ChevronLeft className="mr-2 size-4" />
            Back
          </Button>
          
          {currentStep < steps.length ? (
            <Button variant="default" onClick={handleNext} className="bg-primary hover:bg-primary/90">
              Next Step
              <ChevronRight className="ml-2 size-4" />
            </Button>
          ) : (
            <Button variant="gradient" className="gap-2 shadow-glow px-8">
              <Sparkles className="size-4" />
              Generate Influencer (50 Credits)
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
