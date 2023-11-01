import React from "react";
import Modal from "../modal/Modal";

interface ProjectModalProps {
  project: string;
  handleClose: () => void;
}

const ProjectModal = ({ project, handleClose }: ProjectModalProps) => {
  return (
    <Modal handleClose={handleClose}>
      <div>Hello</div>
    </Modal>
  );
};

export default ProjectModal;
