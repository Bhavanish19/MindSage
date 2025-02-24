"use client";

import { MedicationModal, SymptomModal, UserDetailsModal } from "@/components";
import Section from "@/components/section-label";
import DarkModetoggle from "@/components/settings/dark-mode";
import { Button } from "@/components/ui/button";
import { useSettingsModal } from "@/hooks";
import { Brain, Heart } from "lucide-react";

const Settings = () => {
  const {
    openSymptomModal,
    closeSymptomModal,
    openMedicationModal,
    closeMedicationModal,
    openPersonalDetailsModal,
    closePersonalDetailsModal,
    isSymptomModalOpen,
    isMedicationModalOpen,
    isPersonalDetailsModalOpen,
  } = useSettingsModal();

  return (
    <div className="flex flex-col items-start justify-start w-full max-w-6xl py-8 mx-auto">
      <div className="flex flex-col items-start gap-2">
        <h2 className="text-4xl font-bold mt-6 leading-14  text-gradient my-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Manage your settings
        </h2>
        <p className="text-sm text-muted-foreground">
          Update your account settings
        </p>
      </div>
      <div className="flex flex-col items-start w-full py-8 gap-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-red-500 md:mb-4 mb-2 flex items-center">
            <Heart className="mr-2 text-red-500" />
            Update your symptoms
          </h2>

          <Button size="sm" onClick={openSymptomModal}>
            Add a symptom
          </Button>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-purple-500 md:mb-4 mb-2 flex items-center">
            <Brain className="mr-2 text-purple-500" />
            Update your Health Challenges
          </h2>

          <Button size="sm" onClick={openMedicationModal}>
            Add a Challenge
          </Button>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400 md:mb-4 mb-2 flex items-center">
            <Brain className="mr-2 text-blue-500" />
            Update your personal information
          </h2>
          <Button size="sm" onClick={openPersonalDetailsModal}>
            Update information
          </Button>
        </div>
      </div>

      <SymptomModal />
      <MedicationModal />
      <UserDetailsModal />

      <div className="flex flex-col  gap-3">
        <h1 className="text-2xl dark:text-slate-200   my-3 md:my-6 font-bold text-neutral-700">
          Change Your Theme
        </h1>
        <div className="lg:col-span-1">
          <Section
            label="Interface Theme"
            message="Select or customize your UI theme "
          />
        </div>

        <div className=" w-full flex-1 h-0 flex flex-col gap-10">
          <DarkModetoggle />
        </div>
      </div>
    </div>
  );
};

export default Settings;
